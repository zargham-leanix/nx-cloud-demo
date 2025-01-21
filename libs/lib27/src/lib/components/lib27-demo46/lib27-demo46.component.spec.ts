import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo46Component } from './lib27-demo46.component';

describe('Lib27Demo46Component', () => {
  let component: Lib27Demo46Component;
  let fixture: ComponentFixture<Lib27Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
