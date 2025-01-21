import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo21Component } from './lib6-demo21.component';

describe('Lib6Demo21Component', () => {
  let component: Lib6Demo21Component;
  let fixture: ComponentFixture<Lib6Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
