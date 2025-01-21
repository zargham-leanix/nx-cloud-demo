import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo30Component } from './lib65-demo30.component';

describe('Lib65Demo30Component', () => {
  let component: Lib65Demo30Component;
  let fixture: ComponentFixture<Lib65Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
