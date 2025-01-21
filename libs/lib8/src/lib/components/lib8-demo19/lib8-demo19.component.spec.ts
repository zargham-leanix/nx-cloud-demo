import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo19Component } from './lib8-demo19.component';

describe('Lib8Demo19Component', () => {
  let component: Lib8Demo19Component;
  let fixture: ComponentFixture<Lib8Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
