import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo30Component } from './lib70-demo30.component';

describe('Lib70Demo30Component', () => {
  let component: Lib70Demo30Component;
  let fixture: ComponentFixture<Lib70Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
