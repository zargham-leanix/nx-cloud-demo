import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo23Component } from './lib91-demo23.component';

describe('Lib91Demo23Component', () => {
  let component: Lib91Demo23Component;
  let fixture: ComponentFixture<Lib91Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
