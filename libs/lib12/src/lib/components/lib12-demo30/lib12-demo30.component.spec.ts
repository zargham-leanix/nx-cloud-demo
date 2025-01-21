import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo30Component } from './lib12-demo30.component';

describe('Lib12Demo30Component', () => {
  let component: Lib12Demo30Component;
  let fixture: ComponentFixture<Lib12Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
