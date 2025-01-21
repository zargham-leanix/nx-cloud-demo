import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo31Component } from './lib8-demo31.component';

describe('Lib8Demo31Component', () => {
  let component: Lib8Demo31Component;
  let fixture: ComponentFixture<Lib8Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
