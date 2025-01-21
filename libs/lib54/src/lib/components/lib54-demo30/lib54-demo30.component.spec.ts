import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo30Component } from './lib54-demo30.component';

describe('Lib54Demo30Component', () => {
  let component: Lib54Demo30Component;
  let fixture: ComponentFixture<Lib54Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
