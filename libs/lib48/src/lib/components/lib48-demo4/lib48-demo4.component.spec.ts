import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo4Component } from './lib48-demo4.component';

describe('Lib48Demo4Component', () => {
  let component: Lib48Demo4Component;
  let fixture: ComponentFixture<Lib48Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
