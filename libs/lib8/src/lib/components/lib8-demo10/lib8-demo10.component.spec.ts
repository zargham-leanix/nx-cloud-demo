import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo10Component } from './lib8-demo10.component';

describe('Lib8Demo10Component', () => {
  let component: Lib8Demo10Component;
  let fixture: ComponentFixture<Lib8Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
