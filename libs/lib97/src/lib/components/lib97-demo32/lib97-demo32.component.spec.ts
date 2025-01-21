import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo32Component } from './lib97-demo32.component';

describe('Lib97Demo32Component', () => {
  let component: Lib97Demo32Component;
  let fixture: ComponentFixture<Lib97Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
