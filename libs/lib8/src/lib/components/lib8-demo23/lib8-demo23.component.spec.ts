import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo23Component } from './lib8-demo23.component';

describe('Lib8Demo23Component', () => {
  let component: Lib8Demo23Component;
  let fixture: ComponentFixture<Lib8Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
