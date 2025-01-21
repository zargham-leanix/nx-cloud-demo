import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo10Component } from './lib48-demo10.component';

describe('Lib48Demo10Component', () => {
  let component: Lib48Demo10Component;
  let fixture: ComponentFixture<Lib48Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
