import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo49Component } from './lib6-demo49.component';

describe('Lib6Demo49Component', () => {
  let component: Lib6Demo49Component;
  let fixture: ComponentFixture<Lib6Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
