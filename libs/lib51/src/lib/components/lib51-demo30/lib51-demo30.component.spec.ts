import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo30Component } from './lib51-demo30.component';

describe('Lib51Demo30Component', () => {
  let component: Lib51Demo30Component;
  let fixture: ComponentFixture<Lib51Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
