import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo19Component } from './lib98-demo19.component';

describe('Lib98Demo19Component', () => {
  let component: Lib98Demo19Component;
  let fixture: ComponentFixture<Lib98Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
