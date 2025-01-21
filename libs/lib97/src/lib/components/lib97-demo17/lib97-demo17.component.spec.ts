import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo17Component } from './lib97-demo17.component';

describe('Lib97Demo17Component', () => {
  let component: Lib97Demo17Component;
  let fixture: ComponentFixture<Lib97Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
