import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo12Component } from './lib48-demo12.component';

describe('Lib48Demo12Component', () => {
  let component: Lib48Demo12Component;
  let fixture: ComponentFixture<Lib48Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
