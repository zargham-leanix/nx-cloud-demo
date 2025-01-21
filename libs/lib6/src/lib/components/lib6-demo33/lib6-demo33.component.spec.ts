import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo33Component } from './lib6-demo33.component';

describe('Lib6Demo33Component', () => {
  let component: Lib6Demo33Component;
  let fixture: ComponentFixture<Lib6Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
