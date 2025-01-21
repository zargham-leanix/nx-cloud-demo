import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo30Component } from './lib38-demo30.component';

describe('Lib38Demo30Component', () => {
  let component: Lib38Demo30Component;
  let fixture: ComponentFixture<Lib38Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
