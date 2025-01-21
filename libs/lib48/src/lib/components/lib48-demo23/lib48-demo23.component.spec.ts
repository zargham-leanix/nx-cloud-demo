import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo23Component } from './lib48-demo23.component';

describe('Lib48Demo23Component', () => {
  let component: Lib48Demo23Component;
  let fixture: ComponentFixture<Lib48Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
