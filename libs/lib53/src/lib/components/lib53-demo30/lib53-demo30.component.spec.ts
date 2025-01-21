import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo30Component } from './lib53-demo30.component';

describe('Lib53Demo30Component', () => {
  let component: Lib53Demo30Component;
  let fixture: ComponentFixture<Lib53Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
