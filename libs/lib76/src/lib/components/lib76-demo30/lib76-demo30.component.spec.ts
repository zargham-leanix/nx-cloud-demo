import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo30Component } from './lib76-demo30.component';

describe('Lib76Demo30Component', () => {
  let component: Lib76Demo30Component;
  let fixture: ComponentFixture<Lib76Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
