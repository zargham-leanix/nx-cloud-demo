import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo30Component } from './lib72-demo30.component';

describe('Lib72Demo30Component', () => {
  let component: Lib72Demo30Component;
  let fixture: ComponentFixture<Lib72Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
