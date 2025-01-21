import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo30Component } from './lib79-demo30.component';

describe('Lib79Demo30Component', () => {
  let component: Lib79Demo30Component;
  let fixture: ComponentFixture<Lib79Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
