import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo44Component } from './lib8-demo44.component';

describe('Lib8Demo44Component', () => {
  let component: Lib8Demo44Component;
  let fixture: ComponentFixture<Lib8Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
