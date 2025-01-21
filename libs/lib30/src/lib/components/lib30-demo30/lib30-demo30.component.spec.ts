import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo30Component } from './lib30-demo30.component';

describe('Lib30Demo30Component', () => {
  let component: Lib30Demo30Component;
  let fixture: ComponentFixture<Lib30Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
