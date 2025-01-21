import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo23Component } from './lib30-demo23.component';

describe('Lib30Demo23Component', () => {
  let component: Lib30Demo23Component;
  let fixture: ComponentFixture<Lib30Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
