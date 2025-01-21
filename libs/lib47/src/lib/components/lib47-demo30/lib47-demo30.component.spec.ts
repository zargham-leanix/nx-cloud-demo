import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo30Component } from './lib47-demo30.component';

describe('Lib47Demo30Component', () => {
  let component: Lib47Demo30Component;
  let fixture: ComponentFixture<Lib47Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
