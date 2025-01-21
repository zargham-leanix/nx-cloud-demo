import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo3Component } from './lib48-demo3.component';

describe('Lib48Demo3Component', () => {
  let component: Lib48Demo3Component;
  let fixture: ComponentFixture<Lib48Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
