import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo46Component } from './lib48-demo46.component';

describe('Lib48Demo46Component', () => {
  let component: Lib48Demo46Component;
  let fixture: ComponentFixture<Lib48Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
