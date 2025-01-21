import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo30Component } from './lib86-demo30.component';

describe('Lib86Demo30Component', () => {
  let component: Lib86Demo30Component;
  let fixture: ComponentFixture<Lib86Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
