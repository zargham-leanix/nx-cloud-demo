import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo25Component } from './lib74-demo25.component';

describe('Lib74Demo25Component', () => {
  let component: Lib74Demo25Component;
  let fixture: ComponentFixture<Lib74Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
