import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo8Component } from './lib8-demo8.component';

describe('Lib8Demo8Component', () => {
  let component: Lib8Demo8Component;
  let fixture: ComponentFixture<Lib8Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
