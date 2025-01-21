import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo8Component } from './lib48-demo8.component';

describe('Lib48Demo8Component', () => {
  let component: Lib48Demo8Component;
  let fixture: ComponentFixture<Lib48Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
