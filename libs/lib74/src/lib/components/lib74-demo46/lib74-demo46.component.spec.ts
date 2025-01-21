import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo46Component } from './lib74-demo46.component';

describe('Lib74Demo46Component', () => {
  let component: Lib74Demo46Component;
  let fixture: ComponentFixture<Lib74Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
