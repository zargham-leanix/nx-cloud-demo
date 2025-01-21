import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo41Component } from './lib48-demo41.component';

describe('Lib48Demo41Component', () => {
  let component: Lib48Demo41Component;
  let fixture: ComponentFixture<Lib48Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
