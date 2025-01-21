import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo30Component } from './lib21-demo30.component';

describe('Lib21Demo30Component', () => {
  let component: Lib21Demo30Component;
  let fixture: ComponentFixture<Lib21Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
