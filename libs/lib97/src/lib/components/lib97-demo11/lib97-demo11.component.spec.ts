import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo11Component } from './lib97-demo11.component';

describe('Lib97Demo11Component', () => {
  let component: Lib97Demo11Component;
  let fixture: ComponentFixture<Lib97Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
