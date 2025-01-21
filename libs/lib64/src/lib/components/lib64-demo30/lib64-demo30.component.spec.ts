import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo30Component } from './lib64-demo30.component';

describe('Lib64Demo30Component', () => {
  let component: Lib64Demo30Component;
  let fixture: ComponentFixture<Lib64Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
