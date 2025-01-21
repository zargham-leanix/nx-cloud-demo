import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo30Component } from './lib5-demo30.component';

describe('Lib5Demo30Component', () => {
  let component: Lib5Demo30Component;
  let fixture: ComponentFixture<Lib5Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
