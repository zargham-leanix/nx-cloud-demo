import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo23Component } from './lib40-demo23.component';

describe('Lib40Demo23Component', () => {
  let component: Lib40Demo23Component;
  let fixture: ComponentFixture<Lib40Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
