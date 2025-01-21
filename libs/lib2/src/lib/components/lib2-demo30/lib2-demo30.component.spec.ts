import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo30Component } from './lib2-demo30.component';

describe('Lib2Demo30Component', () => {
  let component: Lib2Demo30Component;
  let fixture: ComponentFixture<Lib2Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
