import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo30Component } from './lib95-demo30.component';

describe('Lib95Demo30Component', () => {
  let component: Lib95Demo30Component;
  let fixture: ComponentFixture<Lib95Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
