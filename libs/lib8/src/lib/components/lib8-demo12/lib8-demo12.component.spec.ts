import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo12Component } from './lib8-demo12.component';

describe('Lib8Demo12Component', () => {
  let component: Lib8Demo12Component;
  let fixture: ComponentFixture<Lib8Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
