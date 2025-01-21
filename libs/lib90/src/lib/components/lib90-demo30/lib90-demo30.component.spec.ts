import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo30Component } from './lib90-demo30.component';

describe('Lib90Demo30Component', () => {
  let component: Lib90Demo30Component;
  let fixture: ComponentFixture<Lib90Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
