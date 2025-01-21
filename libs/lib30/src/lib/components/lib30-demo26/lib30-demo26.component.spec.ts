import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo26Component } from './lib30-demo26.component';

describe('Lib30Demo26Component', () => {
  let component: Lib30Demo26Component;
  let fixture: ComponentFixture<Lib30Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
