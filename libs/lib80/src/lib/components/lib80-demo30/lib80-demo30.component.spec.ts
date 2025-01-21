import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo30Component } from './lib80-demo30.component';

describe('Lib80Demo30Component', () => {
  let component: Lib80Demo30Component;
  let fixture: ComponentFixture<Lib80Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
