import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo23Component } from './lib29-demo23.component';

describe('Lib29Demo23Component', () => {
  let component: Lib29Demo23Component;
  let fixture: ComponentFixture<Lib29Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
