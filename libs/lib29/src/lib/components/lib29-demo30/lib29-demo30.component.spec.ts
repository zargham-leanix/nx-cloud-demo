import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo30Component } from './lib29-demo30.component';

describe('Lib29Demo30Component', () => {
  let component: Lib29Demo30Component;
  let fixture: ComponentFixture<Lib29Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
