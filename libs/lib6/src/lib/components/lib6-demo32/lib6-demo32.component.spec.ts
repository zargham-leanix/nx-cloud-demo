import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo32Component } from './lib6-demo32.component';

describe('Lib6Demo32Component', () => {
  let component: Lib6Demo32Component;
  let fixture: ComponentFixture<Lib6Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
