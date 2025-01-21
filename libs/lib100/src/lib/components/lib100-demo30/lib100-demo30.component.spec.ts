import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo30Component } from './lib100-demo30.component';

describe('Lib100Demo30Component', () => {
  let component: Lib100Demo30Component;
  let fixture: ComponentFixture<Lib100Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
