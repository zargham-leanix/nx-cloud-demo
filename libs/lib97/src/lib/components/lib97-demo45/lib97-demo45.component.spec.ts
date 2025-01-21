import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo45Component } from './lib97-demo45.component';

describe('Lib97Demo45Component', () => {
  let component: Lib97Demo45Component;
  let fixture: ComponentFixture<Lib97Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
